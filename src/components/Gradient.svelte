<script lang="ts">
    export let colors = ["#FEBC2E", "#FE6054", "#8A54FE"];
    $: colors;
</script>

<svg
    width="1176"
    height="649"
    viewBox="0 0 1176 649"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g opacity="0.15" filter="url(#filter0_f_62_28)">
        <path
            d="M788.743 200.555L975.895 419.429L937.284 446.798L908.551 448.963L200 269.678L788.743 200.555Z"
            fill="url(#paint0_linear_62_28)"
        />
    </g>
    <defs>
        <filter
            id="filter0_f_62_28"
            x="0"
            y="0.555359"
            width="1175.9"
            height="648.407"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
        >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="70"
                result="effect1_foregroundBlur_62_28"
            />
        </filter>
        <linearGradient
            id="paint0_linear_62_28"
            x1="1129.13"
            y1="443.012"
            x2="564.685"
            y2="291.769"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color={colors[2]} />
            <stop offset="0.760421" stop-color={colors[0]} />
            <stop offset="0.817714" stop-color={colors[1]} />
            <stop offset="1" stop-color={colors[2]} />
        </linearGradient>
    </defs>
</svg>
