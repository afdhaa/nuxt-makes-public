/* eslint-disable */
export default ({ app: { context: { env } } }, inject) => {
  inject('cloudinary', (publicId, parameters, type) => {
    const fileType = type || 'upload'
    const endPoint = parameters ? `${parameters}/${publicId}` : publicId
    return `http://res.cloudinary.com/${env.cloudinaryName}/image/${fileType}/${endPoint}`
  })
}
