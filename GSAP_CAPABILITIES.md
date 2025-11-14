# GSAP Capabilities Overview

Based on the official GSAP documentation, here's what GSAP can do:

## Core Features (Included in GSAP Core)

### 1. **Tween Animations**
- `gsap.to()` - Animate to specific values
- `gsap.from()` - Animate from specific values
- `gsap.fromTo()` - Animate from and to specific values
- Animate any CSS property (transform, opacity, color, etc.)
- Animate any numeric property of any JavaScript object

### 2. **Timeline Control**
- Sequence multiple animations
- Control timing with labels and position parameters
- Pause, play, reverse, restart animations
- Nest timelines for complex sequences

### 3. **Easing Functions**
- Built-in easing functions (power, elastic, bounce, etc.)
- Custom easing with CustomEase plugin
- EasePack for additional easing options

## Scroll Plugins

### **ScrollTrigger** (Most Popular)
- Trigger animations based on scroll position
- Pin elements during scroll
- Create parallax effects
- Scroll-linked animations
- Progress-based animations
- Scroll snap functionality

### **ScrollSmoother**
- Smooth scrolling experience
- Momentum-based scrolling
- Requires ScrollTrigger

### **ScrollTo**
- Programmatically scroll to elements
- Smooth scroll animations
- Scroll to specific positions

## SVG Plugins

### **DrawSVG**
- Animate SVG path drawing
- Stroke animation effects
- Create line drawing animations

### **MorphSVG**
- Morph between SVG shapes
- Smooth shape transitions
- Complex path morphing

### **MotionPath**
- Animate elements along SVG paths
- Follow complex curves
- 3D motion paths

### **MotionPathHelper**
- Visual editor for motion paths
- Debug and adjust paths

## UI Plugins

### **Flip** (Layout Transitions)
- Smooth layout transitions
- Animate position/size changes
- Perfect for list reordering, card layouts

### **Draggable**
- Drag and drop functionality
- Touch support
- Inertia and momentum
- Snap to positions
- Constrain movement

### **Inertia**
- Physics-based interactions
- Momentum scrolling
- Natural feel

### **Observer**
- Intersection Observer integration
- Trigger animations on visibility
- Scroll-based triggers

## Text Plugins

### **SplitText**
- Split text into characters, words, or lines
- Animate text character by character
- Text reveal animations
- Typography effects

### **ScrambleText**
- Scrambling text effects
- Typewriter effects
- Text reveal animations

### **Text Replacement**
- Animate text changes
- Smooth text transitions

## Other Plugins

### **Physics2D**
- 2D physics simulations
- Gravity, friction, velocity
- Realistic motion

### **PhysicsProps**
- Physics-based property animations
- Natural motion

### **GSDevTools**
- Animation debugging tool
- Timeline scrubbing
- Performance monitoring

## Key Features

1. **Performance**: Hardware-accelerated animations
2. **Browser Compatibility**: Works in all modern browsers
3. **Flexibility**: Animate anything (CSS, SVG, Canvas, etc.)
4. **Control**: Precise timing and sequencing
5. **Plugins**: Extensible architecture
6. **React Integration**: Works seamlessly with React via `useGSAP()` hook

## Common Use Cases

- Scroll-triggered animations
- Page transitions
- Loading animations
- Interactive UI elements
- Parallax effects
- Text animations
- SVG animations
- Drag and drop interfaces
- Layout transitions
- Number counters
- Progress indicators
- Hover effects
- Stagger animations

## Best Practices

1. Use `gsap.context()` for cleanup in React
2. Register plugins before use
3. Use ScrollTrigger for scroll-based animations
4. Leverage timelines for complex sequences
5. Use stagger for multiple element animations
6. Clean up animations on component unmount

