"use client";

import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { CircularProgress } from "@nextui-org/react";
import { onValue, ref, set } from "firebase/database";
import Image from "next/image";
import { useEffect, useState } from "react";
import database from "./../firebase.config";

export default function Home() {
	const [isIrrigate, setIsIrrigate] = useState(false);
	const [value, setValues] = useState(0);
	const [disable, setDisable] = useState(true);
	const [humidity, setHumidity] = useState(0);
	const [temperature, setTemperature] = useState(0);

	useEffect(() => {
		humidityValue();
		temperatureValue();
		handleSoil();
	});
	const handleSoil = () => {
		const path = "Sensors/soil";
		const valueRef = ref(database, path);
		const unsubscribe = onValue(valueRef, (snapshot) => {
			const values = snapshot.val();
			setValues(values);

			if (value <= 30) {
				setDisable(false);
			} else {
				setDisable(true);
			}
		});
		return () => {
			unsubscribe();
		};
	};

	const humidityValue = () => {
		const path = "Sensors/humidity";
		const valueRef = ref(database, path);
		const unsubscribe = onValue(valueRef, (snapshot) => {
			const values = snapshot.val();
			setHumidity(values);
		});
		return () => {
			unsubscribe();
		};
	};

	const temperatureValue = () => {
		const path = "Sensors/temperature";
		const valueRef = ref(database, path);
		const unsubscribe = onValue(valueRef, (snapshot) => {
			const values = snapshot.val();
			setTemperature(values);
		});
		return () => {
			unsubscribe();
		};
	};

	const handleClick = async () => {
		const path = "Controls/irrigation";

		const valueRef = ref(database, path);

		await set(valueRef, isIrrigate ? true : false);
		setIsIrrigate((prev) => !prev);
		console.log(isIrrigate);
	};

	return (
		<div className="flex flex-col items-center h-full p-4 gap-8 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-4xl mt-20 font-bold customShadow">Soil Moisture</h1>
			<Card className="bg-red-50 w-full mb-8 text-center">
				<CardHeader>
					<div className="flex justify-center">
						<CircularProgress
							classNames={{
								svg: "w-28 h-28 drop-shadow-md",
								indicator: "stroke-orange-700",
								track: "stroke-white/20",
								value: "text-2xl font-semibold text-slate-700",
							}}
							value={value}
							strokeWidth={4}
							showValueLabel={true}
						/>
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-xl font-bold">
						The soil moisture of field is low.
					</p>
				</CardContent>
				<CardFooter>
					<div className="w-full flex justify-center">
						<Button
							disabled={disable}
							onClick={handleClick}
							className={`py-2 px-8  font-bold ${
								disable ? "bg-slate-500" : "bg-cyan-400"
							}`}
						>
							Irrigate Now!
						</Button>
					</div>
				</CardFooter>
			</Card>

			<Image width={220} height={220} src={Logo} alt="Logo" />
			<div className="flex flex-col gap-2">
				<div className="flex justify-between gap-10 font-bold text-xl">
					<h1>Humidity: </h1>
					<b>{JSON.stringify(humidity)}</b>
				</div>
				<div className="flex justify-between gap-10 font-bold text-xl">
					<h1>Temperature: </h1>
					<b>{JSON.stringify(temperature)}</b>
				</div>
			</div>
			{/* <Link
				className="flex justify-center gap-3 font-bold items-center p-2"
				href={"/controls"}
			>
				<MoveRight />
				Controls
			</Link> */}
		</div>
	);
}
