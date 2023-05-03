#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Oct 19 15:08:48 2021

@author: fabian
"""

from PIL import Image
import os

def centercrop(path):
    im = Image.open(path)
    width, height = im.size   # Get dimensions

    new_width = new_height = min(height, width)

    left = (width - new_width)/2
    top = (height - new_height)/2
    right = (width + new_width)/2
    bottom = (height + new_height)/2

    # Crop the center of the image
    return im.crop((left, top, right, bottom))


for path in ['hazemabdelkhalek.jpeg']:
    name = path.split('.')[0]
    path = os.path.join(os.getcwd(), path)
    centercrop(path).save(name+'_cropped.jpg')
