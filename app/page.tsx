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
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center h-full p-4 gap-8 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-4xl mt-20 font-bold customShadow">Soil Moisture</h1>
			<Card className="bg-red-50 w-full mb-10 text-center">
				<CardHeader>
					<div className="flex justify-center">
						<CircularProgress
							classNames={{
								svg: "w-28 h-28 drop-shadow-md",
								indicator: "stroke-orange-700",
								track: "stroke-white/20",
								value: "text-2xl font-semibold text-slate-700",
							}}
							value={80}
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
						<Button className="py-2 px-8 bg-cyan-400 font-bold">
							Irrigate Now!
						</Button>
					</div>
				</CardFooter>
			</Card>

			<Image width={220} height={220} src={Logo} alt="Logo" />
			<div className="flex justify-between gap-10 font-bold text-3xl">
				<h1>Soil Moisture: </h1>
				<b>34</b>
			</div>
			<Link
				className="flex justify-center gap-3 font-bold items-center p-2"
				href={"/controls"}
			>
				<MoveRight />
				Controls
			</Link>
		</div>
	);
}
