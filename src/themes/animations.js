import gsap from 'gsap';

export const staggerReveal = (nodeA, nodeB) => {
  gsap.from([nodeA, nodeB], {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.1,
    },
  });
};

export const staggerRevealClose = (nodeA, nodeB) => {
  gsap.to([nodeA, nodeB], {
    duration: 0.8,
    height: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.07,
    },
  });
};

export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: 'power3.inOut',
  });
};

export const staggerText = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    duration: 0.8,
    y: 80,
    delay: 0.2,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.3,
    },
  });
};

export const handleHover = (target) => {
  gsap.to(target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: 'power1.inOut',
  });
};
export const handleHoverOff = (target) => {
  gsap.to(target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: 'power1.inOut',
  });
};
