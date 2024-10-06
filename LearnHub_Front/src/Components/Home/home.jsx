import { Divider } from "@mui/material";
import { ModulesData } from "../../utils/utils";
import ModuleDetails from "../Modules/Resusables/index";
import Header from "./home-header";

function HeroSection() {
  return (
    <div className="flex flex-col gap-[3rem]">
      <Header />
      <Divider
        sx={{
          width: "200%",
          color: "rgba(0, 0, 0, 0.15)",
        }}
      />
      <div className="flex flex-col gap-[1rem] justify-center place-items-center">
        <p className="text-blue-text-color text-[36px] text-center font-medium">
          Challenge yourself in a new way
        </p>
        <Divider
          sx={{
            width: 80,
            height: 2,
            background: "#000352",
          }}
        />
      </div>
      <div className="flex flex-col gap-[5rem] justify-center place-items-center">
        {ModulesData.map((module, index) => (
          <ModuleDetails
            key={index}
            imgUrl={module.imgUrl}
            heading={module.heading}
            description={module.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
