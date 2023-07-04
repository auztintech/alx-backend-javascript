export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
} // eslint-disable-line