# Assets

The portrait is powered by one file.

| File | Used by | Notes |
|------|---------|-------|
| `headshot.png` | Hero portrait | Background-removed cutout of Suraaj, generated from `suraaj img.png`. It sits on the themed frame with a soft accent glow and a bottom fade so it blends into the dark theme. Replace it with any transparent PNG (keep the name) to swap the photo. If it's missing, an elegant "SH" monogram shows automatically. |

To regenerate the cutout from a new source photo (requires `rembg`):

```bash
python3 -c "from rembg import remove; from PIL import Image; \
im=Image.open('source.png').convert('RGBA'); out=remove(im); \
out.crop(out.getbbox()).save('assets/headshot.png')"
```
