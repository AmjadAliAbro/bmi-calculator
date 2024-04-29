import { Inter } from "next/font/google";
import BMI from "@/components/BMI";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div
        style={{ backgroundColor: "rgb(39,37,37)" }}
        className="text-[#ffffff]"
      >
        <BMI />
      </div>
    </div>
  );
}
