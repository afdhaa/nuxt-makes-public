export default function({ $axios }) {
  $axios.onRequest(config => {
    config.headers.common['Api-Key'] =
      '33UUzmM3QZQ52BqG5xbr11FNrIdxd5u66AcGOPsFewdsLXWwGYDmPkQ7bMw4Zdkn3OChguoQe3glwyo1dvoSatva4jPHlgsdwWK0'
  })
}
