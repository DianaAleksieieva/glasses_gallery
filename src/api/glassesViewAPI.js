import axios from 'axios';

const apiUrl = 'https://api.bloobloom.com/';

export const api = axios.create({
  baseURL: apiUrl,
  responseType: 'json',
});


export async function getGlassesInfo() {
  return api
    .get(`user/v1/sales_channels/website/collections/spectacles-men/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=1&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=coloured&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=round&filters[frame_variant_home_trial_available]=false`)
    .then(({ data }) => data)
    .catch(error => console.log(error));
}

// export async function getByTypeMonthly(params) {
//   const { type, year, month } = params;
//   tokenToAxios.set();
//   return api
//     .get(`/transactions/getByType/${type}/${year}/${month}`)
//     .then(({ data }) => data)
//     .catch(error => error);
// }