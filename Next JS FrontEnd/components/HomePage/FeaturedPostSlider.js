import React from "react";

import SectionCarousel from "./Crausel";

export default function FeaturedPostSlider({ blogs }) {
  return (
    <div>
      <div>
        <SectionCarousel blogs={blogs} />
      </div>
    </div>
  );
}

// "semantic-ui-css": "^2.4.1",
// "semantic-ui-react": "^2.0.3",
