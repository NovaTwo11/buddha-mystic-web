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
    gallery: string[];
    features: string[];
}

export const rooms: Room[] = [
    {
        id: 1,
        slug: 'individual',
        name: 'Habitación Individual',
        capacity: '1 persona',
        energy: 'Ideal para Introspección',
        description: 'Un refugio diseñado para el viajero solitario que busca reconectar consigo mismo. Este espacio minimalista ofrece el equilibrio perfecto entre confort y silencio, permitiendo que la mente descanse sin distracciones.',
        lowPrice: '$150.000',
        highPrice: '$250.000',
        mainImage: 'IMG_Hab_4_vglkuy',
        gallery: [
            'IMG_Hab_4_vglkuy',
            'IMG_Hab2_3_da6esg',
            'IMG_Hab2_2_xshtaq',
            'IMG_Hab2_1_olnlc0'
        ],
        features: ['Aire acondicionado', 'TV Satelital', 'Wifi de alta velocidad', 'Baño privado', 'Nevera ejecutiva']
    },
    {
        id: 2,
        slug: 'pareja',
        name: 'Habitación Pareja',
        capacity: '2 personas',
        energy: 'Refugio de Paz',
        description: 'Un santuario íntimo creado para fortalecer vínculos y encontrar la serenidad en compañía. Cada detalle, desde la iluminación hasta las texturas, está pensado para inspirar tranquilidad y un descanso profundo a dos almas.',
        lowPrice: '$150.000',
        highPrice: '$250.000',
        mainImage: 'IMG_Hab2_2_pxnwvq',
        gallery: [
            'IMG_Hab2_2_pxnwvq',
            'IMG_Hab_4_nomkuy',
            'IMG_Hab2_3_pnjjty',
            'IMG_Hab2_1_ryjogo'
        ],
        features: ['Aire acondicionado', 'TV Satelital', 'Wifi de alta velocidad', 'Baño privado', 'Nevera ejecutiva']
    },
    {
        id: 3,
        slug: 'superior',
        name: 'Suite Superior',
        capacity: '2 personas',
        energy: 'Amplitud y Armonía',
        description: 'Nuestra Suite Superior eleva la experiencia de descanso con acabados premium y una disposición espacial que invita a la paz profunda. El espacio ideal para una estadía inolvidable, envuelta en lujo sutil.',
        lowPrice: '$170.000',
        highPrice: '$270.000',
        mainImage: 'IMG_9708_k2ffjv',
        gallery: [
            'IMG_9708_k2ffjv',
            'DJI_20260227_172125_092_pd1rom',
            'DJI_20260227_121456_396_ibudob'
        ],
        features: ['Aire acondicionado', 'TV 50"', 'Wifi de alta velocidad', 'Baño privado de lujo', 'Nevera ejecutiva']
    },
    {
        id: 4,
        slug: 'triple',
        name: 'Habitación Triple',
        capacity: '3 personas',
        energy: 'Unión y Confort',
        description: 'Un espacio diseñado para familias pequeñas o grupos íntimos que buscan compartir momentos de calidad. Sus dimensiones ofrecen la comodidad necesaria para convivir en completa armonía.',
        lowPrice: '$225.000',
        highPrice: '$290.000',
        mainImage: 'DJI_20260227_171323_141_dpqare',
        gallery: [
            'DJI_20260227_171323_141_dpqare',
            'DJI_20260227_171256_514_rj1iqy'
        ],
        features: ['Aire acondicionado', 'TV Satelital', 'Wifi de alta velocidad', 'Baño privado', 'Nevera ejecutiva', 'Mueble y mesa ejecutiva']
    },
    {
        id: 5,
        slug: 'cuadruple',
        name: 'Habitación Cuádruple',
        capacity: '4 personas',
        energy: 'Espacio Compartido',
        description: 'Ideal para la familia moderna. Esta habitación ofrece la amplitud necesaria para que cada huésped encuentre su propio rincón de descanso sin perder la calidez y conexión del grupo.',
        lowPrice: '$280.000',
        highPrice: '$420.000',
        mainImage: 'WhatsApp_Image_2026-05-11_at_1.40.08_PM_cqpb5v',
        gallery: [
            'WhatsApp_Image_2026-05-11_at_1.40.08_PM_cqpb5v'
        ],
        features: ['Aire acondicionado', 'TV Satelital', 'Wifi de alta velocidad', 'Baño privado', 'Nevera ejecutiva', 'Mueble y mesa ejecutiva']
    },
    {
        id: 6,
        slug: 'sextuple',
        name: 'Habitación Séxtuple',
        capacity: '6 personas',
        energy: 'Familia Extendida',
        description: 'Un ambiente generoso pensado para acoger grandes familias. Un refugio donde la convivencia y la risa se armonizan con el diseño sutil, limpio y relajante de la esencia Buddha Mystic.',
        lowPrice: '$480.000',
        highPrice: '$550.000',
        mainImage: 'DJI_20260227_163805_968_lrb40n',
        gallery: [
            'DJI_20260227_163805_968_lrb40n',
            'DJI_20260227_163413_632_advhzh',
            'DJI_20260227_163458_437_wkhz45',
            'DJI_20260227_163442_734_z7vlum'
        ],
        features: ['Aire acondicionado', 'TV Satelital', 'Wifi de alta velocidad', 'Baño privado', 'Nevera ejecutiva', 'Mueble y mesa ejecutiva']
    },
    {
        id: 7,
        slug: 'octuple',
        name: 'Habitación Óctuple',
        capacity: '8 personas',
        energy: 'Gran Encuentro',
        description: 'Diseñada para albergar a grupos extensos en un solo espacio unificado. Sus dimensiones majestuosas aseguran un confort absoluto para todos los integrantes, promoviendo el descanso colectivo.',
        lowPrice: '$550.000',
        highPrice: '$720.000',
        mainImage: 'DJI_20260227_122657_989_w6blks',
        gallery: [
            'DJI_20260227_122657_989_w6blks',
            'DJI_20260227_124155_806_hqo9bk',
            'DJI_20260227_122801_801_ueqoue',
            'DJI_20260227_122812_991_v7kvxv'
        ],
        features: ['Aire acondicionado', 'TV Satelital', 'Wifi de alta velocidad', 'Múltiples baños', 'Nevera ejecutiva', 'Mueble y mesa ejecutiva']
    },
    {
        id: 8,
        slug: 'acomodacion-10-pax',
        name: 'Acomodación 10 pax',
        capacity: '10 personas',
        energy: 'Círculo de Luz',
        description: 'Un santuario colectivo perfecto para retiros y grupos de meditación. Permite la convivencia ininterrumpida y el trabajo espiritual o grupal, manteniendo intacta nuestra promesa de paz.',
        lowPrice: '$620.000',
        highPrice: '$900.000',
        mainImage: 'IMG_0642_jrbdft',
        gallery: [
            'IMG_0642_jrbdft',
            'IMG_0647_dejw7i'
        ],
        features: ['Aire acondicionado', 'TV Satelital', 'Wifi de alta velocidad', 'Múltiples baños privados', 'Nevera ejecutiva', 'Mueble y mesa ejecutiva']
    },
    {
        id: 9,
        slug: 'acomodacion-12-pax',
        name: 'Acomodación 12 pax',
        capacity: '12 personas',
        energy: 'Retiro Colectivo',
        description: 'Nuestra estancia más majestuosa. Un espacio amplio e iluminado que honra el poder de la comunidad. Ideal para retiros holísticos donde el descanso de todos fluye en un solo ambiente.',
        lowPrice: '$700.000',
        highPrice: '$1.000.000',
        mainImage: 'DJI_20260227_164109_343_izxhjz',
        gallery: [
            'DJI_20260227_164109_343_izxhjz'
        ],
        features: ['Aire acondicionado', 'TV Satelital', 'Wifi de alta velocidad', 'Múltiples baños privados', 'Nevera ejecutiva', 'Mueble y mesa ejecutiva']
    }
];