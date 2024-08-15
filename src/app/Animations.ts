import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    // Initial state of new route
    style({ opacity: 0 }),
    // Animation and final state of new route
    animate('900ms', style({ opacity: 1 }))
  ]),
]);

/*trigger is used to define the name of the animation (fadeAnimation in this case).
 This name is used to reference the animation in your components. */

 /*transition defines the sequence of animation steps between two states. The syntax
  '* => *' means that the transition should apply to any state change. 
  In the context of route transitions, this means the animation will run whenever the route changes.
You can also specify more specific transitions like ':enter' (for entering state) and ':leave' (for leaving state) */

/*style defines the CSS styles to apply at different stages of the animation.
style({ opacity: 0 }) sets the initial state of the new route to be fully transparent.
animate */

/*animate defines the duration and timing function of the animation.
 In this case, '600ms' specifies that the animation should take 600 milliseconds.
The second argument to animate is another style function that defines the final state of the animation.
 style({ opacity: 1 }) sets the final state of the new route to be fully opaque*/