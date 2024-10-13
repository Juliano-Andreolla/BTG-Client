export interface IBtgModel {
    name: string;
    description?: string;
}

export const BtgModels: IBtgModel[] = [
    {name: 'htdemucs', description: 'First version of Hybrid Transformer Demucs. Trained on MusDB + 800 songs. Default model.'},
    {name: 'htdemucs_ft', description: 'Fine-tuned version of htdemucs. Separation takes 4 times longer but may offer slightly better results. Same training set as htdemucs.'},
    {name: 'htdemucs_6s', description: '6-sources version of htdemucs, adding piano and guitar as sources. Note that the piano source performance is currently suboptimal.'},
    {name: 'hdemucs_mmi', description: 'Hybrid Demucs v3, retrained on MusDB + 800 songs.'},
    {name: 'mdx', description: 'Trained only on MusDB HQ, winning model for track A at the MDX challenge.'},
    {name: 'mdx_extra', description: 'Trained with additional data, including the MusDB test set. Ranked 2nd on track B of the MDX challenge.'},
    {name: 'mdx_q, mdx_extra_q', description: 'Quantized version of mdx. Smaller download and storage, but with slightly reduced quality.'},
];