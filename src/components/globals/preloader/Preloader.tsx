import React from "react";
import styles from "./styles.module.css";

const Preloader = () => {
	return (
		<div
			className="h-screen w-full bg-white 
    flex items-center justify-center overflow-hidden 
    position fixed top-0 left-0 bottom-0 right-0"
		>
			<div className={styles.spinner}>
				<div className={styles.bounce1}></div>
				<div className={styles.bounce2}></div>
				<div className={styles.bounce3}></div>
			</div>
		</div>
	);
};

export default Preloader;
