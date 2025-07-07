`author: Alessio Burbulia`

# Bug Report: Graphic Bugs Due to Mobile-First Approach

## Introduction

As part of the project development, a mobile-first approach was adopted for the design and layout of the website. This approach focuses on providing an optimal user experience on mobile devices first, then progressively enhancing the design for larger screen sizes.

While this approach ensures a good mobile experience, it might cause some graphic bugs or layout issues when the website is viewed on larger screens or non-mobile devices. These issues are a result of prioritizing mobile device responsiveness and the time constraints during development.

## Reasons for Graphic Bugs

### Mobile-First Design Choice

- **Responsive Design**: The mobile-first approach means the website was initially built to cater to mobile screens. When viewed on desktop or tablet-sized devices, certain elements may not scale or adjust perfectly.
- **Screen Size Differences**: Mobile screens have a smaller resolution, which can lead to design and layout inconsistencies when scaling up for larger screen sizes. Some elements may not align as intended or might overflow on wider screens.

### Time Constraints

- Due to time limitations during development, some aspects of the design were not fully optimized for larger screens. This includes:
  - **Image Formats**: The project didn't have time to implement the best image formats for performance and quality. As a result, the images might not be optimized, and this could contribute to slower load times or unexpected behavior on various screen sizes.
  - **Media Queries**: While some media queries were applied for responsiveness, there may still be cases where the layout doesn’t adapt smoothly to different resolutions.

## Image Optimization & Insertion

- **Image Formats**: Ideally, images would be optimized using modern formats like WebP or AVIF to ensure faster loading times and better quality. However, due to the constraints, these formats were not explored and implemented in this version.
- **Image Placement**: Images should be dynamically placed and responsive to avoid issues with scaling or alignment. However, this aspect was not fully addressed, leading to potential layout problems in certain contexts.

## Conclusion

The graphic bugs and layout issues are a result of the decision to prioritize a mobile-first approach, with limited time available to refine the website's design for larger screens. As the project evolves, these issues will be revisited, and the design will be improved for better cross-device compatibility and overall user experience.

We plan to make necessary adjustments once there is more time available for further refinement.