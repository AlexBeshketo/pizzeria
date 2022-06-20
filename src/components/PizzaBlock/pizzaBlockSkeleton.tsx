import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props:any) => (
    <ContentLoader className="pizza-block"
        speed={2}
        width={280}
        height={474}
        viewBox="0 0 280 474"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="114" cy="120" r="112" />
        <rect x="4" y="238" rx="9" ry="9" width="217" height="27" />
        <rect x="8" y="284" rx="7" ry="7" width="214" height="42" />
        <rect x="9" y="341" rx="6" ry="6" width="68" height="27" />
        <rect x="115" y="334" rx="24" ry="24" width="108" height="37" />
    </ContentLoader>
)

export default PizzaSkeleton