import React from "react";


export default function Hero ({page, children}) {
  return(
    <>
      <section className={`hero ${page || ""}`}>
				<div className="hero-content">
					{children}
				</div>
			</section>
    </>
  );
}