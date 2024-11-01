import { notifySuccess } from '@/ultil/toast'

export const useProductAddToCard = () => {
  const handleAddToCard = () => notifySuccess('Đặt hàng thành công')

  return {
    handleAddToCard,
  }
}

export const useProductAddWishlist = () => {
  const handleAddWishlist = () =>
    notifySuccess('Đã thêm vào danh sách yêu thích')

  return {
    handleAddWishlist,
  }
}
