import CardGen from "./components/CardGen";
import { GEN1, GEN2 } from "./gens";

export default function Home() {
  return (
    <main className="" dir="rtl">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-4 py-px mb-4 text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              عَيْنًا سَلْسَبِيلًا
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 right-0 z-0 hidden w-32 -mt-12 -mr-24 text-blue-gray-100 lg:w-32 lg:-mr-36 lg:-mt-12 sm:block"
              >
                <defs>
                  <pattern
                    id="d0d83814-78b6-480f-9a5f-7f637616b267"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>
            احمي طفلك من الاباحية
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="relative grid  items-center grid-cols-2 gap-8 mb-8">
          <CardGen gen={GEN1} />
          <CardGen gen={GEN2} />
        </div>
      </div>
    </main>
  );
}
