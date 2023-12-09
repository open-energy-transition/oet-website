#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Oct 19 15:08:48 2021

@author: fabian hofmann + max parzen
"""

from PIL import Image
import os


def centercrop_and_resize(path, min_size=274):
    im = Image.open(path)
    width, height = im.size  # Get dimensions

    # Crop to a square
    new_width = new_height = min(height, width)
    left = (width - new_width) / 2
    top = (height - new_height) / 2
    right = (width + new_width) / 2
    bottom = (height + new_height) / 2
    im_cropped = im.crop((left, top, right, bottom))

    # Resize the image if it's smaller than the specified minimum size
    if new_width < min_size or new_height < min_size:
        im_resized = im_cropped.resize((min_size, min_size), Image.LANCZOS)
        return im_resized

    return im_cropped


for path in ["assets/img/people/Oluwafemi.jpg"]:
    name = path.split('.')[0]
    path = os.path.join(os.getcwd(), path)
    centercrop_and_resize(path).save(name + '_cropped.jpg')
