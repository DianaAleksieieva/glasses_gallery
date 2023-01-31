import axios from "axios";

const apiUrl = "https://api.bloobloom.com/";

export const api = axios.create({
  baseURL: apiUrl,
  responseType: "json",
});


export async function getMenuInfo() {
  return api
    .get(
      `https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections`
    )
    .then(({ data }) => data)
    .catch((error) => console.log(error));
}

export async function getGlassesInfo(type) {
  return api
    .get(
      `user/v1/sales_channels/website/collections/${type}/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=1&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=coloured&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=round&filters[frame_variant_home_trial_available]=false`
    )
    .then(({ data }) => data)
    .catch((error) => console.log(error));
}


export async function getByColour(colour) {
  return api
    .get(
      `user/v1/sales_channels/website/collections/spectacles-men/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=1&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${colour}&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=round&filters[frame_variant_home_trial_available]=false`
    )
    .then(({ data }) => data)
    .catch((error) => console.log(error));
}

export async function getByFrame(params) {
  const { frame } = params;
  return api
    .get(
      `user/v1/sales_channels/website/collections/spectacles-men/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=1&filters[][]=coloured&filters[${frame}][]=round&filters[frame_variant_home_trial_available]=false`
    )
    .then(({ data }) => data)
    .catch((error) => console.log(error));
}
