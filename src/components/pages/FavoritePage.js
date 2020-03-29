import React from 'react';
import "../../App.css";
import { GalleryCard } from 'tabler-react'
import zion from './zion.jpg'
import cvs from './cvs.jpg'
import mini from './mini.jpg'
import local from './local.jpg'
import pen from './pen.jpg'


export const FavoritePage= () => {
  return (
    <GalleryCard class="store">
      <GalleryCard.Image src={zion} />
      <GalleryCard.Footer>
        <GalleryCard.Details
          fullName="Zion Market"
          dateString="3 Toilet Paper in stock"
        />
      </GalleryCard.Footer>

      <GalleryCard.Image src={pen} />
      <GalleryCard.Footer>
        <GalleryCard.Details
          fullName="Pen's General Store"
          dateString="4 Toilet Paper in stock"
        />
      </GalleryCard.Footer>

      <GalleryCard.Image src={mini} />
      <GalleryCard.Footer>
        <GalleryCard.Details
          fullName="Mini Marketplace"
          dateString="8 Toilet Paper in stock"
        />
      </GalleryCard.Footer>

      <GalleryCard.Image src={cvs} />
      <GalleryCard.Footer>
        <GalleryCard.Details
          fullName="CVS"
          dateString="0 Toilet Paper in stock"
        />
      </GalleryCard.Footer>

      <GalleryCard.Image src={local} />
      <GalleryCard.Footer>
        <GalleryCard.Details
          fullName="LA Local"
          dateString="2 Toilet Paper in stock"
        />
      </GalleryCard.Footer>
    </GalleryCard>

  );
}

