"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	ArrowBigDown,
	ArrowBigLeft,
	ArrowBigRight,
	ArrowBigUp,
	MoveLeft,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center h-full p-4 gap-8 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-4xl mt-20 font-bold customShadow">
				Agri Robot Controller
			</h1>
			<Card className="p-8 flex w-full flex-col gap-10">
				<div className="flex justify-center">
					<Button className="w-40 p-4">Cutter</Button>
				</div>
				<div className="flex justify-center">
					<Button className="w-40 p-4">Seeder</Button>
				</div>
				<div className="flex justify-center">
					<Button className="w-40 p-4">Sprayer</Button>
				</div>
			</Card>
			<div className="flex flex-col mt-20 gap-10 p-8">
				<div className="flex justify-center text-2xl font-bold">
					<Button size="icon">
						{" "}
						<ArrowBigUp />
					</Button>
				</div>
				<div className="flex gap-48">
					<Button size="icon">
						<ArrowBigLeft />
					</Button>
					<Button size="icon">
						<ArrowBigRight />
					</Button>
				</div>
				<div className="flex justify-center">
					<Button size="icon">
						<ArrowBigDown />
					</Button>
				</div>
			</div>

			<Link
				className="flex justify-center gap-3 font-bold items-center p-2"
				href={"/"}
			>
				<MoveLeft />
				Monitor
			</Link>
		</div>
	);
}
