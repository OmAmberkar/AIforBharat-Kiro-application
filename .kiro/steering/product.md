# Product Specification: Aspect Ratio Calculator

## Problem
Designers and developers constantly struggle to calculate equivalent pixel dimensions for specific aspect ratios (e.g., "If I have a 16:9 video that is 800px wide, how tall is it?"). Mental math for this is difficult.

## Solution
A single-purpose, lightweight web tool that:
1.  Allows one-click selection of common standard ratios (16:9, 4:3, 1:1, 21:9).
2.  Provides bidirectional input (changing width updates height, and vice versa).
3.  Delivers instant results without page reloads.

## User Flow
1.  User opens the page.
2.  User selects a ratio (default 16:9).
3.  User types "800" into Width.
4.  Height automatically updates to "450".