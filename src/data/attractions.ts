type Translator = {
    (key: string): string;
    raw: (key: string) => string[];
};

export const getAttractionsData = (t: Translator) => ({
    "hacienda-napoles": {
        title: t('hacienda-napoles.title'),
        category: t('hacienda-napoles.category'),
        tagline: t('hacienda-napoles.tagline'),
        description: t('hacienda-napoles.description'),
        history: t('hacienda-napoles.history'),
        location: t('hacienda-napoles.location'),
        mapLink: "https://www.google.com/maps/search/?api=1&query=Parque+Tematico+Hacienda+Napoles+Doradal",
        images: [
            "IMG_2922_mjlzdu",
            "IMG_2923_tilvok",
            "IMG_2924_cbv9lu",
            "okavangoagosto-2025_hq1zop",
            "tobogan-serpiente2.2_nweiut",
            "IMG_7314_wwc6zn",
            "Medellin-Hacienda-Napoles-Foto-14-con-Aventureros360-1_s0oxln"
        ],
        details: t.raw('hacienda-napoles.details')
    },
    "santorini": {
        title: t('santorini.title'),
        category: t('santorini.category'),
        tagline: t('santorini.tagline'),
        description: t('santorini.description'),
        history: t('santorini.history'),
        location: t('santorini.location'),
        mapLink: "https://www.google.com/maps/search/?api=1&query=Aldea+Doradal+Santorini+Colombiano",
        images: [
            "IMG_4491_gebqxo",
            "IMG_3134_ogrnpq",
            "IMG_3076_peeta1",
            "IMG_3075_nzxoly",
            "IMG_3074_yrbjvr",
            "IMG_3073_avnern",
            "IMG_3072_l1uahs",
            "IMG_3071_tkdfmj",
            "IMG_3070_tp8rsf"
        ],
        details: t.raw('santorini.details')
    },
    "rio-claro": {
        title: t('rio-claro.title'),
        category: t('rio-claro.category'),
        tagline: t('rio-claro.tagline'),
        description: t('rio-claro.description'),
        history: t('rio-claro.history'),
        location: t('rio-claro.location'),
        mapLink: "https://www.google.com/maps/search/?api=1&query=Reserva+Natural+Rio+Claro+Antioquia",
        images: [
            "image00065_l844m8",
            "image00066_kaho2j",
            "image00052_y9jctq",
            "DJI_0112_os6yuv",
            "DJI_0110_jkiibw"
        ],
        details: t.raw('rio-claro.details')
    },
    "cascada-san-juan": {
        title: t('cascada-san-juan.title'),
        category: t('cascada-san-juan.category'),
        tagline: t('cascada-san-juan.tagline'),
        description: t('cascada-san-juan.description'),
        history: t('cascada-san-juan.history'),
        location: t('cascada-san-juan.location'),
        mapLink: "https://www.google.com/maps/search/?api=1&query=Cascada+San+Juan+Puerto+Triunfo",
        images: [
            "608653108_1688237502504707_8729437822250448478_n_ftej8b",
            "51234291_333097920746283_2468427054878556160_n_p400wc",
            "86721875_1240934999443349_4685719194342260736_n_y7qqjl",
            "604810167_1688237582504699_5711515220725373089_n_ssxke6",
            "96082275_1307383116131870_3558750063981232128_n_myl7tp"
        ],
        details: t.raw('cascada-san-juan.details')
    },
    "rio-magdalena": {
        title: t('rio-magdalena.title'),
        category: t('rio-magdalena.category'),
        tagline: t('rio-magdalena.tagline'),
        description: t('rio-magdalena.description'),
        history: t('rio-magdalena.history'),
        location: t('rio-magdalena.location'),
        mapLink: "https://www.google.com/maps/search/?api=1&query=Malecon+Puerto+Triunfo+Rio+Magdalena",
        images: [
            "DJI_0223_f9lnq7",
            "45bcb79b-b47d-464f-9c39-5376e94a877b_cfvyai",
            "IMG_4174_lau1rn",
            "IMG_4205_pus9tv"
        ],
        details: t.raw('rio-magdalena.details')
    },
    "rio-la-miel": {
        title: t('rio-la-miel.title'),
        category: t('rio-la-miel.category'),
        tagline: t('rio-la-miel.tagline'),
        description: t('rio-la-miel.description'),
        history: t('rio-la-miel.history'),
        location: t('rio-la-miel.location'),
        mapLink: "https://www.google.com/maps/search/?api=1&query=Rio+La+Miel+Norcasia+Caldas",
        images: [
            "rio-la-miel-dorada-caldas-9_idj7xp",
            "1650476180984994_x1l2wb",
            "inmersion-en-un-paraiso-natural-a-orillas-del-rio-la-miel-1200-a45800e_cckqxd",
            "inmersion-en-un-paraiso-natural-a-orillas-del-rio-la-miel-1200-d4092be_rlirhs",
            "191069696_216852443370430_6641700777784027213_n_rutdoy"
        ],
        details: t.raw('rio-la-miel.details')
    }
});

export type AttractionSlug = "hacienda-napoles" | "santorini" | "rio-claro" | "cascada-san-juan" | "rio-magdalena" | "rio-la-miel";