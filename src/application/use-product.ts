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

export const useProductRemoveWishlist = () => {
  const handleRemoveWishlist = () =>
    notifySuccess('Đã xoá khỏi danh sách yêu thích')

  return {
    handleRemoveWishlist,
  }
}
