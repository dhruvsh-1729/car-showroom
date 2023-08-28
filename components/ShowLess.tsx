"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/app/utils";
import { CustomButton } from "@/components";

const ShowLess = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber - 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show Less"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowLess;