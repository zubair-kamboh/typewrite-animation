/**
 * /*
 *
 * let words = ["Zubair", "a Web Developer", "A Student"];
 *
 * // gsap.to(".text", {
 * // 	duration: 2,
 * // 	text: "This is the new text",
 * // 	ease: "none",
 * // 	repeat: -1,
 * // });
 *
 * let mastertl = gsap.timeline({ repeat: -1 });
 *
 * words.forEach((word) => {
 * 	let tl = gsap.timeline({ yoyo: true, repeat: 1 });
 *
 * 	// tl.to(".text", { duration: 1, text: word });
 *
 * 	tl.to(".text", {
 * 		duration: 2,
 * 		text: {
 * 			value: "This is the new text",
 * 			newClass: "class2",
 * 			oldClass: "class1",
 * 		},
 * 		ease: "power2",
 * 	});
 * 	mastertl.add(tl);
 * });
 *
 * @format
 */
