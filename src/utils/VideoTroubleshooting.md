# Video Background Troubleshooting Guide

## Common Issues & Solutions

### 1. Video Not Playing

#### Symptoms
- Black background instead of video
- Static image showing
- No video playback

#### Solutions

1. **Check Required Attributes**
```jsx
<video
  autoPlay    // Enable automatic playback
  loop        // Make video loop continuously
  muted       // Required for autoplay in most browsers
  playsInline // Required for iOS devices
>
  <source src="video.mp4" type="video/mp4" />
</video>
```

2. **Verify File Path**
- Ensure the video URL is accessible
- Check for CORS issues if hosting on different domain
- Verify file exists and is properly uploaded

3. **Browser Console Errors**
- Check developer tools for specific error messages
- Look for 404 (not found) or CORS-related errors

### 2. Performance Issues

#### Symptoms
- Laggy playback
- High CPU usage
- Page loading slowly

#### Solutions

1. **Optimize Video Files**
- Recommended specifications:
  - Resolution: 1920x1080 max
  - Format: MP4 with H.264 codec
  - Duration: Under 30 seconds
  - File size: Under 5MB
  - Bitrate: 2Mbps or lower

2. **Use Multiple Sources**
```jsx
<video>
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

### 3. Mobile Compatibility

#### Symptoms
- Video not playing on mobile devices
- Fullscreen issues on iOS

#### Solutions

1. **iOS-Specific Attributes**
```jsx
<video
  playsInline  // Prevents fullscreen on iOS
  webkit-playsinline // Legacy iOS support
>
```

2. **Mobile-First Approach**
```css
.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
}
```

### 4. CSS Implementation

#### Proper Video Background Setup
```css
.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: cover;
}

/* Fallback for older browsers */
@media (min-aspect-ratio: 16/9) {
  .video-background {
    width: 100%;
    height: auto;
  }
}

@media (max-aspect-ratio: 16/9) {
  .video-background {
    width: auto;
    height: 100%;
  }
}
```

## Browser Compatibility

### Minimum Requirements
- Chrome 53+
- Firefox 63+
- Safari 10+
- Edge 79+
- iOS Safari 10+
- Chrome for Android 105+

### Format Support
- MP4 (H.264): Widely supported
- WebM: Modern browsers
- Ogg: Limited support

## Best Practices

1. **Always Include Fallbacks**
```jsx
<div className="video-container">
  <video className="video-background">
    <source src="video.webm" type="video/webm" />
    <source src="video.mp4" type="video/mp4" />
    {/* Fallback image */}
    <img src="fallback.jpg" alt="Fallback" />
  </video>
</div>
```

2. **Lazy Loading**
```jsx
<video loading="lazy">
```

3. **Preload Strategy**
```jsx
<video preload="metadata">
```

4. **Accessibility**
```jsx
<video aria-hidden="true" role="presentation">
```

## Performance Tips

1. Compress videos using tools like HandBrake or FFmpeg
2. Use CDN for video delivery
3. Consider lazy loading for below-the-fold videos
4. Implement proper caching headers
5. Use appropriate video dimensions for different devices

## Testing Checklist

- [ ] Video plays automatically
- [ ] Loops continuously
- [ ] Muted by default
- [ ] Responsive on all screen sizes
- [ ] Works on mobile devices
- [ ] Fallback image displays when needed
- [ ] Acceptable load times
- [ ] No memory leaks