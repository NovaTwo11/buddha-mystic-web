export interface MediaItem {
    type: 'image' | 'video';
    src: string;
}

export interface Room {
    id: number;
    slug: string;
    name: string;
    capacity: string;
    energy: string;
    description: string;
    lowPrice: string;
    highPrice: string;
    mainImage: string;
    gallery: MediaItem[];
    features: string[];
}

// Definimos la forma exacta del traductor para complacer a ESLint
type Translator = {
    (key: string): string;
    raw: (key: string) => string[];
};

export const getRooms = (t: Translator): Room[] => [
    {
        id: 1,
        slug: 'individual',
        name: t('individual.name'),
        capacity: t('individual.capacity'),
        energy: t('individual.energy'),
        description: t('individual.description'),
        lowPrice: '$150.000',
        highPrice: '$250.000',
        mainImage: 'IMG_Hab_4_vglkuy',
        gallery: [
            {type: 'image', src: 'IMG_Hab_4_vglkuy'},
            {type: 'image', src: 'IMG_Hab2_3_da6esg'},
            {type: 'image', src: 'IMG_Hab2_2_xshtaq'},
            {type: 'image', src: 'IMG_Hab2_1_olnlc0'}
        ],
        features: t.raw('individual.features')
    },
    {
        id: 2,
        slug: 'pareja',
        name: t('pareja.name'),
        capacity: t('pareja.capacity'),
        energy: t('pareja.energy'),
        description: t('pareja.description'),
        lowPrice: '$150.000',
        highPrice: '$250.000',
        mainImage: 'IMG_Hab2_2_pxnwvq',
        gallery: [
            {type: 'image', src: 'IMG_Hab2_2_pxnwvq'},
            {type: 'image', src: 'IMG_Hab_4_nomkuy'},
            {type: 'image', src: 'IMG_Hab2_3_pnjjty'},
            {type: 'image', src: 'IMG_Hab2_1_ryjogo'}
        ],
        features: t.raw('pareja.features')
    },
    {
        id: 3,
        slug: 'superior',
        name: t('superior.name'),
        capacity: t('superior.capacity'),
        energy: t('superior.energy'),
        description: t('superior.description'),
        lowPrice: '$170.000',
        highPrice: '$270.000',
        mainImage: 'IMG_9708_k2ffjv',
        gallery: [
            {type: 'image', src: 'IMG_9708_k2ffjv'},
            {type: 'image', src: 'DJI_20260227_172125_092_pd1rom'},
            {type: 'image', src: 'DJI_20260227_121456_396_ibudob'}
        ],
        features: t.raw('superior.features')
    },
    {
        id: 4,
        slug: 'triple',
        name: t('triple.name'),
        capacity: t('triple.capacity'),
        energy: t('triple.energy'),
        description: t('triple.description'),
        lowPrice: '$225.000',
        highPrice: '$290.000',
        mainImage: 'DJI_20260227_171323_141_dpqare',
        gallery: [
            {type: 'image', src: 'DJI_20260227_171323_141_dpqare'},
            {type: 'image', src: 'DJI_20260227_171256_514_rj1iqy'}
        ],
        features: t.raw('triple.features')
    },
    {
        id: 5,
        slug: 'cuadruple',
        name: t('cuadruple.name'),
        capacity: t('cuadruple.capacity'),
        energy: t('cuadruple.energy'),
        description: t('cuadruple.description'),
        lowPrice: '$280.000',
        highPrice: '$420.000',
        mainImage: 'WhatsApp_Image_2026-05-11_at_1.40.08_PM_cqpb5v',
        gallery: [
            {type: 'image', src: 'WhatsApp_Image_2026-05-11_at_1.40.08_PM_cqpb5v'}
        ],
        features: t.raw('cuadruple.features')
    },
    {
        id: 6,
        slug: 'sextuple',
        name: t('sextuple.name'),
        capacity: t('sextuple.capacity'),
        energy: t('sextuple.energy'),
        description: t('sextuple.description'),
        lowPrice: '$480.000',
        highPrice: '$550.000',
        mainImage: 'DJI_20260227_163805_968_lrb40n',
        gallery: [
            {type: 'image', src: 'DJI_20260227_163805_968_lrb40n'},
            {type: 'image', src: 'DJI_20260227_163413_632_advhzh'},
            {type: 'image', src: 'DJI_20260227_163458_437_wkhz45'},
            {type: 'image', src: 'DJI_20260227_163442_734_z7vlum'}
        ],
        features: t.raw('sextuple.features')
    },
    {
        id: 7,
        slug: 'octuple',
        name: t('octuple.name'),
        capacity: t('octuple.capacity'),
        energy: t('octuple.energy'),
        description: t('octuple.description'),
        lowPrice: '$550.000',
        highPrice: '$720.000',
        mainImage: 'DJI_20260227_122657_989_w6blks',
        gallery: [
            {type: 'image', src: 'DJI_20260227_122657_989_w6blks'},
            {type: 'image', src: 'DJI_20260227_124155_806_hqo9bk'},
            {type: 'image', src: 'DJI_20260227_122801_801_ueqoue'},
            {type: 'image', src: 'DJI_20260227_122812_991_v7kvxv'}
        ],
        features: t.raw('octuple.features')
    },
    {
        id: 8,
        slug: 'acomodacion-10-pax',
        name: t('acomodacion-10-pax.name'),
        capacity: t('acomodacion-10-pax.capacity'),
        energy: t('acomodacion-10-pax.energy'),
        description: t('acomodacion-10-pax.description'),
        lowPrice: '$620.000',
        highPrice: '$900.000',
        mainImage: 'IMG_0642_jrbdft',
        gallery: [
            {type: 'image', src: 'IMG_0642_jrbdft'},
            {type: 'image', src: 'IMG_0647_dejw7i'}
        ],
        features: t.raw('acomodacion-10-pax.features')
    },
    {
        id: 9,
        slug: 'acomodacion-12-pax',
        name: t('acomodacion-12-pax.name'),
        capacity: t('acomodacion-12-pax.capacity'),
        energy: t('acomodacion-12-pax.energy'),
        description: t('acomodacion-12-pax.description'),
        lowPrice: '$700.000',
        highPrice: '$1.000.000',
        mainImage: 'DJI_20260227_164109_343_izxhjz',
        gallery: [
            {type: 'image', src: 'DJI_20260227_164109_343_izxhjz'}
        ],
        features: t.raw('acomodacion-12-pax.features')
    }
];