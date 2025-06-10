import { INavItems, IiconsList } from "./types";
import {
  // FaFacebookF,
  FaInstagram,
  // FaWhatsapp,
  // FaTwitter,
} from "react-icons/fa";
import { Grid3x3, Image, ImagePlus, CalendarDays } from "lucide-react";
import { MediaType, GallerySortOptions } from "./enums";

import OGBBorn from "../assets/images/2000/ogb born.png";
import OBGBaptized from "../assets/images/2000/ogb baptized.png";
import OBGDedicated from "../assets/images/2000/ogb-dedicated.png";
import OBGSixMonths from "../assets/images/2000/ogb_6months.png";

import KidOGB from "../assets/images/2003/baby ogb.png";
import KidOGB2 from "../assets/images/2003/baby ogb2.png";
import KidOGB3 from "../assets/images/2003/ogb_kid.png";
import KidOGBWithMom from "../assets/images/2003/ogb_w_mama.png";

import OGBBDPSchool from "../assets/images/2005/ogb_at_6.png";
import OGBBDPSchool2 from "../assets/images/2005/ogb_early-education.png";

import FirstHolyCommunion from "../assets/images/2010/first_holy_communion.png";
import OGBEndsGrade5 from "../assets/images/2010/ogb_end_of_grade_5.png";

import OGBGradPS1 from "../assets/images/2011/ogb_grad_PS.png";
import OGBGradPS2 from "../assets/images/2011/ogb_receive_prize.png";
import OGBStartSSCE from "../assets/images/2011/ogb_start_sec_school.png";
import OGBWFriendsSSCE from "../assets/images/2011/RP - Ogb, Kelz, Thelma n Oma.png";

import OGBMusicTeam from "../assets/images/2015/ogb_music_team.png";

import OGBWPriest from "../assets/images/2016/ogb_HS_chapel.png";

import OGBHGGradWFriends from "../assets/images/2017/ogb HS grad w friends 2.jpg";
import OGBHGGradWFriends2 from "../assets/images/2017/ogb HS grad w friends.png";
import OGBHGGradWFriendsWParents from "../assets/images/2017/ogb HS grad with parents.png";
import OGBHGGradWKelly from "../assets/images/2017/RP grad Kels n Ogb.png";
import OGBAUNConvocationSolo from "../assets/images/2017/ogb convocation aun.png";
import OGBAUNConvocationWFriends from "../assets/images/2017/ogb convocation pic w friends.png";
import OGBAfterClassVideo from "../assets/images/2017/ogb_after_class_video.mp4";
import OGBAfterClass from "../assets/images/2017/ogb_after_class.jpg";
import OGBxRahmaVideo from "../assets/images/2017/ogb_rahms_video.mp4";

import OGBGettingIceCream from "../assets/images/2018/ogb_icecream.png";
import OGBShocked from "../assets/images/2018/ogb_shocked.jpg";

import OGBxFavorHug from "../assets/images/2019/obg_x_fav.jpg";
import OGBLaughingInLibrary from "../assets/images/2019/Ogb solo.png";
import OGBSunKissed from "../assets/images/2019/Ogb solo.png";
import OGBSunKissedLaughing from "../assets/images/2019/ogb_intense_laugh.jpg";
import OGBHavingFunSolo from "../assets/images/2019/ogb_doing-w-s-d-b.png";
import OGBHavingFunSoloSmiling from "../assets/images/2019/ogb_smile.png";
import OGBAUNInduction from "../assets/images/2019/ogb_friends_aun_honor_society_induction.png";
import OGBAUNInductionSoloFull from "../assets/images/2019/ogb_full_w_induction_certificate.jpg";
import OGBAUNInductionSolo from "../assets/images/2019/ogb_w_induction_certificate.png";
import OGBAUNInductionxGang from "../assets/images/2019/ogb_induction-award.jpg";
import OGBWHabiba from "../assets/images/2019/ogb-w-biba.jpg";
import OGBInClass from "../assets/images/2019/ogb_in_class.jpg";
import OGBWFriend from "../assets/images/2019/ogb_w_t.png";
import OGBWFriends from "../assets/images/2019/ogb-w-friends.png";
import OGBxPraiseVideo from "../assets/images/2019/ogb_w_praise.mp4";

import OGDressedUp from "../assets/images/2020/Ogb solo 3.png";
import OGBxIfunanya from "../assets/images/2020/ogb_hot.jpg";
import OGBWomensDay from "../assets/images/2020/ogb_womens_right.jpg";
import OGBxGang from "../assets/images/2020/ogb-w-gang.jpg";
import OGBWalking from "../assets/images/2020/ogb-walking.jpg";
import OGBxRahmaMakeup from "../assets/images/2020/ogbxrahmz.jpg";
import OGBnRuth from "../assets/images/2020/ogb x ruth.jpg";
import OGBwMomOnPlane from "../assets/images/2020/Ogb n Mom plane.png";
import OGBwMoMnDadAirport from "../assets/images/2020/ogb_w_mom_n_dad.jpg";

import OGBnNonso from "../assets/images/2021/Ogb n Nons 22 or 21.png";
import OGBGradPictureSolo from "../assets/images/2021/Ogb AUN grad solo.png";
import OGBxGangxGrad from "../assets/images/2021/ogb_grad.jpg";
import OGBAfterGrad from "../assets/images/2021/ogb_after_grad.jpg";
import OGBwtheGirls from "../assets/images/2021/ogb_and_girls.jpg";
import OGBwGirls from "../assets/images/2021/ogb_x_girls.jpg";
import OGBPitchDay from "../assets/images/2021/ogb_x_john final project.png";

import OGBBD22WFamily from "../assets/images/2022/Ogb bday w family 1.png";
import OGBBD22 from "../assets/images/2022/Ogb bday 22 w Kels n Nons.png";
import OGBBD22WAUNFriends from "../assets/images/2022/ogb_bd_gang.png";
import OGBwMomCheckup from "../assets/images/2022/Ogb n Mom back to India check up.png";
import OGBHotBed from "../assets/images/2022/Ogb hot bed.png";
import OGBwParentsIndia from "../assets/images/2022/Ogb n parents India.png";
import OGBGradCeremoney from "../assets/images/2022/ogb_graduating_w_honors.png";
import OutwFriends from "../assets/images/2022/ogb_out.mp4";
import OutWineWFriends from "../assets/images/2022/ogb_pop_wine.mp4";

import OGBxNYSC from "../assets/images/2023/NYSC Ogb.png";
import OGBwHosStaff from "../assets/images/2023/Ogb n hpt staff.png";
import OGBSelfiewParents from "../assets/images/2023/Ogb n parents selfie 1.png";
import OGBatHomewFamily from "../assets/images/2023/Ogb n hpt staff.png";
import ShowingUp from "../assets/images/2023/friends_at_the_site.jpg";

export const navItems: Array<INavItems> = [
  // {
  //   id: 1,
  //   label: "Events",
  //   link: "/events",
  // },
  {
    id: 2,
    label: "Gallery",
    link: "/gallery",
  },
  {
    id: 3,
    label: "Stories",
    link: "/stories",
  },
  // {
  //   id: 4,
  //   label: "Timeline",
  //   link: "/timeline",
  // },
  {
    id: 5,
    label: "Contribute",
    link: "/contribute",
  },
];

export const iconsList: Array<IiconsList> = [
  // {
  //   id: 1,
  //   icon: <FaFacebookF size={24} />,
  //   url: "",
  // },
  {
    id: 2,
    icon: <FaInstagram size={24} />,
    url: "https://www.instagram.com/omaa_foundation/",
  },
  // {
  //   id: 3,
  //   icon: <FaWhatsapp size={24} />,
  //   url: "",
  // },
  // {
  //   id: 4,
  //   icon: <FaTwitter size={24} />,
  //   url: "",
  // },
];

// EVENTS

// GALLERY
export const gallerySortOptions = [
  {
    items: {
      icon: <ImagePlus size={16} />,
      label: GallerySortOptions.RECENTLYADDED,
    },
  },
  {
    items: {
      icon: <CalendarDays size={16} />,
      label: GallerySortOptions.DATE,
    },
  },
];

export const galleryFilterOptions = [
  {
    items: {
      icon: <Grid3x3 size={16} />,
      label: MediaType.ALL,
    },
  },
  {
    items: {
      icon: <Image size={16} />,
      label: MediaType.PHOTOS,
    },
  },
  // {
  //   items: {
  //     icon: <Video size={16} />,
  //     label: MediaType.VIDEOS,
  //   },
  // },
];

export const ImageList = [
  {
    Image: OGDressedUp,
    alt: "Ogb with friends from aun",
    media: MediaType.PHOTOS,
    dateAdded: "2023-10-27 14:45:15",
  },
  {
    Image: OGBxIfunanya,
    alt: "OGB out with Ifunaya",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBWomensDay,
    alt: "Ogb womens day AUN",
    media: MediaType.PHOTOS,
    dateAdded: new Date(),
  },
  {
    Image: OGBxGang,
    alt: "OGB with the gang",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBSunKissedLaughing,
    alt: "OGB laughing while Sun-Kissed",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBAfterClass,
    alt: "OGB after class Year 1 AUN",
    media: MediaType.PHOTOS,
    dateAdded: "2017-10-27 14:45:15",
  },
  {
    Image: OGBBD22,
    alt: "OGB 22nd Birthday with Friends",
    media: MediaType.PHOTOS,
    dateAdded: "2022-10-27 14:45:15",
  },
];

export const GalleryListLeft = [
  {
    id: 1,
    gallery: [
      {
        Image: OGBAfterClass,
        alt: "OGB after class Year 1 AUN",
        media: MediaType.PHOTOS,
        dateAdded: "2017-10-27 14:45:15",
      },
      {
        Image: OGBxIfunanya,
        alt: "OGB out with Ifunaya",
        media: MediaType.PHOTOS,
        dateAdded: "2020-10-27 14:45:15",
      },
      {
        Image: KidOGB,
        alt: "OGB riding bicycle",
        media: MediaType.PHOTOS,
        dateAdded: "2003-10-27 14:45:15",
      },
    ],
  },
  {
    id: 2,
    gallery: [
      {
        Image: OGBBD22WFamily,
        alt: "OGB celebrating 22nd Birthday with Family",
        media: MediaType.PHOTOS,
        dateAdded: "2022-10-27 14:45:15",
      },
      {
        Image: OGBBD22,
        alt: "OGB 22nd Birthday with Friends",
        media: MediaType.PHOTOS,
        dateAdded: "2022-10-27 14:45:15",
      },
      {
        Image: OGDressedUp,
        alt: "Ogb with friends in class",
        media: MediaType.PHOTOS,
        dateAdded: new Date(),
      },
    ],
  },
];

export const GalleryListRight = [
  {
    id: 1,
    gallery: [
      {
        Image: OGBWomensDay,
        alt: "OGB with Rahma on Womens Day",
        media: MediaType.PHOTOS,
        dateAdded: "2020-10-27 14:45:15",
      },
      {
        Image: OGBAUNInductionSoloFull,
        alt: "OGB AUN Induction to Honor Society full picture",
        media: MediaType.PHOTOS,
        dateAdded: "2019-10-27 14:45:15",
      },
      {
        Image: OGBSelfiewParents,
        alt: "OGB Selfie with Parents",
        media: MediaType.PHOTOS,
        dateAdded: "2023-10-27 14:45:15",
      },
    ],
  },
  {
    id: 2,
    gallery: [
      {
        Image: OGBSunKissed,
        alt: "OGB Sun-Kissed",
        media: MediaType.PHOTOS,
        dateAdded: "2019-10-27 14:45:15",
      },
      {
        Image: OGBSunKissedLaughing,
        alt: "OGB laughing while Sun-Kissed",
        media: MediaType.PHOTOS,
        dateAdded: "2019-10-27 14:45:15",
      },
      {
        Image: OGBwtheGirls,
        alt: "OGB with the Girls",
        media: MediaType.PHOTOS,
        dateAdded: "2021-10-27 14:45:15",
      },
    ],
  },
];

export const Images = [
  {
    Image: OGBBorn,
    alt: "OBG Born",
    media: MediaType.PHOTOS,
    dateAdded: "2000-10-27 14:45:15",
  },
  {
    Image: OBGBaptized,
    alt: "Baby OGB baptized",
    media: MediaType.PHOTOS,
    dateAdded: "2000-10-27 14:45:15",
  },
  {
    Image: OBGDedicated,
    alt: "Baby OGB Dedicated in church",
    media: MediaType.PHOTOS,
    dateAdded: "2000-10-27 14:45:15",
  },
  {
    Image: OBGSixMonths,
    alt: "Baby OGB at 6 months old",
    media: MediaType.PHOTOS,
    dateAdded: "2000-10-27 14:45:15",
  },
  {
    Image: KidOGB,
    alt: "OGB riding bicycle",
    media: MediaType.PHOTOS,
    dateAdded: "2003-10-27 14:45:15",
  },
  {
    Image: KidOGB2,
    alt: "OGB as a kid",
    media: MediaType.PHOTOS,
    dateAdded: "2003-10-27 14:45:15",
  },
  {
    Image: KidOGB3,
    alt: "OGB covering her face",
    media: MediaType.PHOTOS,
    dateAdded: "2003-10-27 14:45:15",
  },
  {
    Image: KidOGBWithMom,
    alt: "OGB x Baby John with Mom",
    media: MediaType.PHOTOS,
    dateAdded: "2003-10-27 14:45:15",
  },
  {
    Image: OGBBDPSchool,
    alt: "OGB birthday in School",
    media: MediaType.PHOTOS,
    dateAdded: "2006-10-27 14:45:15",
  },
  {
    Image: OGBBDPSchool2,
    alt: "OGB birthday in School",
    media: MediaType.PHOTOS,
    dateAdded: "2006-10-27 14:45:15",
  },
  {
    Image: FirstHolyCommunion,
    alt: "OGB after receiving her First Holy Communion",
    media: MediaType.PHOTOS,
    dateAdded: "2010-10-27 14:45:15",
  },
  {
    Image: OGBEndsGrade5,
    alt: "OGB Ends Grade 5",
    media: MediaType.PHOTOS,
    dateAdded: "2010-10-27 14:45:15",
  },
  {
    Image: OGBGradPS1,
    alt: "OGB Graduates Primary School",
    media: MediaType.PHOTOS,
    dateAdded: "2011-10-27 14:45:15",
  },
  {
    Image: OGBGradPS2,
    alt: "OGB Receives prize in Primary School on Graduation",
    media: MediaType.PHOTOS,
    dateAdded: "2011-10-27 14:45:15",
  },
  {
    Image: OGBStartSSCE,
    alt: "OGB Starts JS1",
    media: MediaType.PHOTOS,
    dateAdded: "2011-10-27 14:45:15",
  },
  {
    Image: OGBWFriendsSSCE,
    alt: "OGB with friends in JS1",
    media: MediaType.PHOTOS,
    dateAdded: "2011-10-27 14:45:15",
  },
  {
    Image: OGBMusicTeam,
    alt: "OGB with the music team",
    media: MediaType.PHOTOS,
    dateAdded: "2015-10-27 14:45:15",
  },
  {
    Image: OGBWPriest,
    alt: "OGB with other alter servers and the reverend",
    media: MediaType.PHOTOS,
    dateAdded: "2016-10-27 14:45:15",
  },
  {
    Image: OGBHGGradWFriends,
    alt: "OGB High School Graduation With Friends",
    media: MediaType.PHOTOS,
    dateAdded: "2017-10-27 14:45:15",
  },
  {
    Image: OGBHGGradWFriends2,
    alt: "OGB High School Graduation With Friends 2",
    media: MediaType.PHOTOS,
    dateAdded: "2017-10-27 14:45:15",
  },
  {
    Image: OGBHGGradWKelly,
    alt: "OGB High School Graduation With Kelechi",
    media: MediaType.PHOTOS,
    dateAdded: "2017-10-27 14:45:15",
  },
  {
    Image: OGBHGGradWFriendsWParents,
    alt: "OGB High School Graduation With Parents",
    media: MediaType.PHOTOS,
    dateAdded: "2017-10-27 14:45:15",
  },
  {
    Image: OGBAUNConvocationSolo,
    alt: "OGB on Convocation Day Solo",
    media: MediaType.PHOTOS,
    dateAdded: "2017-10-27 14:45:15",
  },
  {
    Image: OGBAUNConvocationWFriends,
    alt: "OGB on Convocation Day with Friends and Mom (in the middle)",
    media: MediaType.PHOTOS,
    dateAdded: "2017-10-27 14:45:15",
  },
  {
    Image: OGBAfterClass,
    alt: "OGB after class Year 1 AUN",
    media: MediaType.PHOTOS,
    dateAdded: "2017-10-27 14:45:15",
  },
  {
    Image: OGBAfterClassVideo,
    alt: "OGB after class Year 1 AUN Video",
    media: MediaType.VIDEOS,
    dateAdded: "2017-10-27 14:45:15",
  },
  {
    Image: OGBxRahmaVideo,
    alt: "OGB and Rahma Video",
    media: MediaType.VIDEOS,
    dateAdded: "2017-10-27 14:45:15",
  },
  {
    Image: OGBGettingIceCream,
    alt: "OGB Out for Ice Cream",
    media: MediaType.PHOTOS,
    dateAdded: "2018-10-27 14:45:15",
  },
  {
    Image: OGBShocked,
    alt: "OGB shocked on John's Coronation",
    media: MediaType.PHOTOS,
    dateAdded: "2018-10-27 14:45:15",
  },
  {
    Image: OGBxFavorHug,
    alt: "OGB hugging Favor",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBLaughingInLibrary,
    alt: "OGB Laughing in Library",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBSunKissed,
    alt: "OGB Sun-Kissed",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBSunKissedLaughing,
    alt: "OGB laughing while Sun-Kissed",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBHavingFunSolo,
    alt: "OGB having a good time (Solo Picture)",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBHavingFunSoloSmiling,
    alt: "OGB having a good smile (Solo Picture)",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBAUNInduction,
    alt: "OGB AUN Induction to Honor Society with other Inductees",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBAUNInductionSoloFull,
    alt: "OGB AUN Induction to Honor Society full picture",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBAUNInductionSolo,
    alt: "OGB AUN Induction to Honor Society portrait",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBAUNInductionxGang,
    alt: "The Crew came to support OGB x friends",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBWHabiba,
    alt: "OGB with Habiba",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBInClass,
    alt: "OGB Paying attention in Class",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBWFriend,
    alt: "OGB with Friend",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBWFriends,
    alt: "OGB outting with Friends",
    media: MediaType.PHOTOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGBxPraiseVideo,
    alt: "OGB outting with Friends",
    media: MediaType.VIDEOS,
    dateAdded: "2019-10-27 14:45:15",
  },
  {
    Image: OGDressedUp,
    alt: "OGB out looking pretty",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBxIfunanya,
    alt: "OGB out with Ifunaya",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBWomensDay,
    alt: "OGB with Rahma on Womens Day",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBxGang,
    alt: "OGB with the gang",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBWalking,
    alt: "OGB walking under the shade AUN",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBxRahmaMakeup,
    alt: "OGB makeup day with Rahma",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBnRuth,
    alt: "OGB makeup day with Ruth",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBwMomOnPlane,
    alt: "OGB with mom on the Plane",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBwMoMnDadAirport,
    alt: "OGB with mom and dad at the Airport",
    media: MediaType.PHOTOS,
    dateAdded: "2020-10-27 14:45:15",
  },
  {
    Image: OGBnNonso,
    alt: "OGB with Nonso",
    media: MediaType.PHOTOS,
    dateAdded: "2021-10-27 14:45:15",
  },
  {
    Image: OGBGradPictureSolo,
    alt: "OGB Grad Day solo",
    media: MediaType.PHOTOS,
    dateAdded: "2021-10-27 14:45:15",
  },
  {
    Image: OGBxGangxGrad,
    alt: "OGB Grad Picture with the Group",
    media: MediaType.PHOTOS,
    dateAdded: "2021-10-27 14:45:15",
  },
  {
    Image: OGBAfterGrad,
    alt: "OGB after Grad shots",
    media: MediaType.PHOTOS,
    dateAdded: "2021-10-27 14:45:15",
  },
  {
    Image: OGBwtheGirls,
    alt: "OGB with the Girls",
    media: MediaType.PHOTOS,
    dateAdded: "2021-10-27 14:45:15",
  },
  {
    Image: OGBwGirls,
    alt: "OGB with the Girls",
    media: MediaType.PHOTOS,
    dateAdded: "2021-10-27 14:45:15",
  },
  {
    Image: OGBPitchDay,
    alt: "OGB with John, final Project defense",
    media: MediaType.PHOTOS,
    dateAdded: "2021-10-27 14:45:15",
  },
  {
    Image: OGBBD22WFamily,
    alt: "OGB celebrating 22nd Birthday with Family",
    media: MediaType.PHOTOS,
    dateAdded: "2022-10-27 14:45:15",
  },
  {
    Image: OGBBD22,
    alt: "OGB 22nd Birthday with Friends",
    media: MediaType.PHOTOS,
    dateAdded: "2022-10-27 14:45:15",
  },
  {
    Image: OGBBD22WAUNFriends,
    alt: "OGB 22nd Birthday with AUN Friends",
    media: MediaType.PHOTOS,
    dateAdded: "2022-10-27 14:45:15",
  },
  {
    Image: OGBwMomCheckup,
    alt: "OGB Back to India for Checkup With Mom",
    media: MediaType.PHOTOS,
    dateAdded: "2022-10-27 14:45:15",
  },
  {
    Image: OGBHotBed,
    alt: "OGB in Hospital Bed",
    media: MediaType.PHOTOS,
    dateAdded: "2022-10-27 14:45:15",
  },
  {
    Image: OGBwParentsIndia,
    alt: "OGB celebrating with Parents at the Hospital",
    media: MediaType.PHOTOS,
    dateAdded: "2022-10-27 14:45:15",
  },
  {
    Image: OGBGradCeremoney,
    alt: "OGB graduating with Honors",
    media: MediaType.PHOTOS,
    dateAdded: "2022-10-27 14:45:15",
  },
  {
    Image: OutwFriends,
    alt: "OGB out with Friends",
    media: MediaType.VIDEOS,
    dateAdded: "2022-10-27 14:45:15",
  },
  {
    Image: OutWineWFriends,
    alt: "OGB out with Friends",
    media: MediaType.VIDEOS,
    dateAdded: "2022-10-27 14:45:15",
  },
  {
    Image: OGBxNYSC,
    alt: "OGB serving her country - NYSC",
    media: MediaType.PHOTOS,
    dateAdded: "2023-2-27 14:45:15",
  },
  {
    Image: OGBwHosStaff,
    alt: "OGB with Hospital Staff",
    media: MediaType.PHOTOS,
    dateAdded: "2023-10-27 14:45:15",
  },
  {
    Image: OGBSelfiewParents,
    alt: "OGB Selfie with Parents",
    media: MediaType.PHOTOS,
    dateAdded: "2023-10-27 14:45:15",
  },
  {
    Image: OGBatHomewFamily,
    alt: "OGB picture with the family",
    media: MediaType.PHOTOS,
    dateAdded: "2021-10-27 14:45:15",
  },
  {
    Image: ShowingUp,
    alt: "Everyone at the Burial Site 💖",
    media: MediaType.PHOTOS,
    dateAdded: "2023-10-27 14:45:15",
  },
];
