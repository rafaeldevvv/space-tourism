export interface Images {
   png: string;
   webp: string;
}

export interface Destination {
   name: string;
   images: Images;
   imageAlt: string;
   description: string;
   distance: string;
   travel: string;
}

export interface Member {
   name: string;
   images: Images;
   role: string;
   bio: string;
   imageAlt: string
}

export interface Technology {
   name: string;
   images: {
      portrait: string;
      landscape: string;
   };
   description: string;
}

export interface SpaceData {
   destinations: Destination[];
   crew: Member[];
   technology: Technology[];
 }