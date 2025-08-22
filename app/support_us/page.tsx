"use client";

import { useRouter } from "next/navigation";
import SupportUs from "../_components/SupportUs";

function SupportUsPage() {
  const router = useRouter();
  return (
    <div>
      <SupportUs
        isOpen={true}
        onClose={() => {
          router.push("/");
        }}
        close={true}
      />
    </div>
  );
}

export default SupportUsPage;
