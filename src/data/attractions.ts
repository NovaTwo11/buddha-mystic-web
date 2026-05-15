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
        gallery: [
            {type: 'image', src: "IMG_2922_mjlzdu"},
            {type: 'image', src: "IMG_2924_cbv9lu"},
            {type: 'image', src: "okavangoagosto-2025_hq1zop"},
            {type: 'image', src: "2c2dac6b-e1fa-4c04-9624-96eb2780cf44"},
            {type: 'image', src: "9a1a1743-27c5-4760-8864-d95b18bf2154"},
            {type: 'image', src: "ba263e21-39f8-47c9-bd24-8e0afdc74b72"},
            {type: 'image', src: "93f459b6-3b3c-4e4a-abb2-4d3d902eeaf8"},
            {type: 'image', src: "a5d9bf07-b570-43bc-9e03-ef59bbaff5e2"},
            {type: 'image', src: "37266d35-c4bd-4e11-b28c-2d6a845aabbf"},
            {type: 'image', src: "fcfa52c7-a737-4c81-8d5c-d1d0042e8b1a"},
            {type: 'image', src: "13658b38-656a-4271-8cf5-385e20e283da"},
            {type: 'image', src: "d53d5814-5017-4b83-98a2-6d6cd1553e71"},
            {type: 'image', src: "630745e3-e377-42db-b5a1-93e94f287d14"},
            {type: 'image', src: "b6ba2c06-2b3c-4f5e-94b1-fac302390a7a"},
            {type: 'image', src: "5bb4b851-27a2-479a-8782-8798abe3964f"},
            {type: 'image', src: "tobogan-serpiente2.2_nweiut"},
            {type: 'image', src: "IMG_7314_wwc6zn"},
            {type: 'image', src: "Medellin-Hacienda-Napoles-Foto-14-con-Aventureros360-1_s0oxln"}
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
        gallery: [
            {type: 'image', src: "1abd26bd-58fa-43d4-b09e-fdeb9e9869dc"},
            {type: 'image', src: "IMG_3134_ogrnpq"},
            {type: 'video', src: "WhatsApp_Video_2026-05-12_at_4.50.51_PM_oaqpep"},
            {type: 'image', src: "IMG_3076_peeta1"},
            {type: 'image', src: "IMG_3075_nzxoly"},
            {type: 'image', src: "fd8463cb-47e6-47d4-89bc-118017136989"},
            {type: 'image', src: "9c681212-685d-4cde-a222-d52f4bdb7ca9"},
            {type: 'video', src: "WhatsApp_Video_2026-05-12_at_4.50.27_PM_guzwsj"},
            {type: 'image', src: "105e0f16-57b4-4164-a79a-074ca2a049e3"},
            {type: 'image', src: "aff12741-2c25-431e-9185-925661c188e6"},
            {type: 'image', src: "6e6f9146-0d03-4046-a860-96705fb36fc5"},
            {type: 'image', src: "3fd33751-d3b9-49bb-a43a-ce9359f057da"},
            {type: 'video', src: "WhatsApp_Video_2026-05-12_at_4.50.32_PM_a0sl0j"},
            {type: 'image', src: "c3617499-dab8-420c-806f-06e371f71ec7"},
            {type: 'image', src: "161df19a-790a-4ef5-b18e-4549117126b2"},
            {type: 'image', src: "9da7dbb2-e9df-418b-954d-2e899eb9d4cf"},
            {type: 'image', src: "8e7d4157-7f99-4ebd-8c44-fef86cd22ce4"},
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
        gallery: [
            {type: 'image', src: "image00065_l844m8"},
            {type: 'image', src: "image00066_kaho2j"},
            {type: 'image', src: "image00052_y9jctq"},
            {type: 'video', src: "VIDEO_2_pwwpx8"},
            {type: 'image', src: "54c4080b-1e9f-4468-9119-3e16fb7baea7"},
            {type: 'image', src: "15871a82-faa4-4f44-85a9-0923a3293c63"},
            {type: 'video', src: "VIDEO_1_hfhead"},
            {type: 'image', src: "e995f4ef-c22b-4d82-b520-d216ea3268fb"},
            {type: 'image', src: "DJI_0112_os6yuv"},
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
        gallery: [
            {type: 'image', src: "a2001594-5dcb-46f7-a672-2826ef156a7a"},
            {type: 'video', src: "VIDEO_2_xjmf3w"},
            {type: 'image', src: "51234291_333097920746283_2468427054878556160_n_p400wc"},
            {type: 'image', src: "344d91b9-042d-4cfe-8841-145ba0627b27"},
            {type: 'image', src: "01698af5-8719-4b9c-8a26-abd7ab841476"},
            {type: 'image', src: "b199cf4d-9058-4a57-aa88-c1f653f616a2"},
            {type: 'video', src: "VIDEO_1_nqnmmh"},
            {type: 'image', src: "86721875_1240934999443349_4685719194342260736_n_y7qqjl"},
            {type: 'image', src: "604810167_1688237582504699_5711515220725373089_n_ssxke6"},
            {type: 'image', src: "96082275_1307383116131870_3558750063981232128_n_myl7tp"}
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
        gallery: [
            {type: 'image', src: "63bdf2ab-849b-4f72-8b1f-214cb58376c5"},
            {type: 'image', src: "DJI_0223_f9lnq7"},
            {type: 'video', src: "VIDEO_1_fes96s"},
            {type: 'image', src: "45bcb79b-b47d-464f-9c39-5376e94a877b_cfvyai"},
            {type: 'image', src: "5185c856-2a90-4b60-85cd-373f94f23849"},
            {type: 'image', src: "IMG_4205_pus9tv"},
            {type: 'image', src: "IMG_4174_lau1rn"},

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
        gallery: [
            {type: 'image', src: "f1aa2222-2ad6-495a-83ca-a8b4b6be48ff"},
            {type: 'image', src: "4228cef1-07d6-4e8f-bf45-2b957602a8dd"},
            {type: 'video', src: "VIDEO_3_rwwmfi"},
            {type: 'image', src: "inmersion-en-un-paraiso-natural-a-orillas-del-rio-la-miel-1200-a45800e_cckqxd"},
            {type: 'video', src: "VIDEO_1_wnrecp"},
            {type: 'image', src: "inmersion-en-un-paraiso-natural-a-orillas-del-rio-la-miel-1200-d4092be_rlirhs"},
            {type: 'video', src: "VIDEO_2_stswza"},
            {type: 'image', src: "1650476180984994_x1l2wb"},

        ],
        details: t.raw('rio-la-miel.details')
    }
});

export type AttractionSlug = "hacienda-napoles" | "santorini" | "rio-claro" | "cascada-san-juan" | "rio-magdalena" | "rio-la-miel";