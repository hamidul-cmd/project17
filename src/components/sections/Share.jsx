import React from "react";
import Commonleft from "../Commonleft";
import Commonimgbox from "../Commonimgbox";

function Share() {
  return (
    <>
      <section className="bg-white dark:bg-black-900">
        <div className="max-w-wrapper m-auto grid grid-cols-1 px-4 py-14.5 gap-5 ll2:grid-cols-2 ll2:px-7.5 3xl:gap-[77px] 3xl:px-20">
          <Commonleft
            capsule="Share"
            title="Share anything you’re working on."
            pera="Campsite has been instrumental in keeping designers aware ofeach others' work-in-progress in a way that was previouslyslowing us down. It's also one of the only channels where."
            button="See how it works"
          />
          <Commonimgbox img="https://i.imgur.com/08dxUXG.png" />
        </div>
        <div className="max-w-wrapper m-auto grid grid-cols-1 px-4 py-14.5 gap-5 ll2:grid-cols-2 ll2:px-7.5 3xl:gap-[77px] 3xl:px-20">
          <Commonimgbox img="https://i.imgur.com/vaD215w.png" />
          <Commonleft
            capsule="Feedback"
            title="Better feedback at the right time."
            pera="Campsite has been instrumental in keeping designers aware of each others' work-in-progress in a way that was previously slowing us down. It's also one of the only channels where."
            button="See how it works"
          />
        </div>
      </section>
    </>
  );
}

export default Share;
