"use client";
import { FC, useState } from "react";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { CarCardProps } from "@/types";

interface CarProps {
  car: CarCardProps;
}

const CarCard = ({ car }: CarProps) => {
  return <div>{car.model}</div>;
};

export default CarCard;
