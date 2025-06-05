import { cn } from "@/lib/utils";
// ...existing code...
// ...existing code...
export const Logo = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  const fillColor = uniColor ? "currentColor" : "#0900FF";
  // Metin için konum ve stil ayarları
  const textX = 95; // Logo sembolünden sonraki başlama konumu (yaklaşık x=60'da biter)
  const textY = 32.5; // viewBox yüksekliğinin (65) ortası
  const fontSize = 24; // Metin boyutu
  const fontFamily = "Arial, Helvetica, sans-serif"; // Font ailesi
  const fontWeight = "bold"; // Font kalınlığı
  return (
    <svg
      width="34"
      height="65"
      viewBox="0 0 64 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)} // className prop'u eklendi
    >
      <g>
        {/* filter="url(#filter0_d_85_27)" kaldırıldı */}
        <path
          d="M5.68741 20.4388C9.1947 26.098 9.11018 31.7292 5.65811 38.8809C3.78937 42.6051 3.89206 42.8944 11.0252 50.3281C18.0594 57.6667 18.4512 57.8532 20.5442 55.6777C25.3011 50.7333 35.1025 50.6421 44.2184 55.223C46.1778 56.1559 47.7113 55.1559 53.7049 48.9259C60.3645 42.0037 60.7412 41.4141 58.763 39.5109C53.9162 34.848 53.716 24.5634 58.2984 15.6428C59.1357 13.7826 58.1353 12.2488 51.9037 6.25369C44.8809 -0.502738 44.3901 -0.784494 42.3922 1.29216C37.6354 6.23658 29.7782 6.48457 19.9888 2.20781C16.5609 0.623622 16.1765 0.825129 9.42182 7.8462L6.81677 10.554C4.25448 13.2173 3.79189 17.2661 5.68741 20.4388V20.4388ZM30.1505 10.651C35.9682 10.3452 37.726 10.8938 42.8544 15.0659C48.3785 19.6187 48.7817 20.3875 49.1993 26.8826C49.6055 32.7955 48.9622 34.652 45.3622 39.1859C40.2437 45.4961 35.8107 47.1343 28.3115 45.8224C13.8989 43.3816 8.81038 26.2995 19.2754 15.4218C22.6052 11.9607 24.6257 11.0483 30.1505 10.651Z"
          fill={fillColor}
        />
      </g>

      {/* <defs> bloğu kaldırıldı */}
      {/*
      
      <defs>
        <filter
          id="filter0_d_85_27"
          x="0.527344"
          y="0.153687"
          width="63.2836"
          height="64.7357"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_85_27"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_85_27"
            result="shape"
          />
        </filter>
      </defs>
      */}
    </svg>
  );
};
