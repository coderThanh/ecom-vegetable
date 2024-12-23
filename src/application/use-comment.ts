import { notifySuccess } from '@/ultil/toast'

export const useCommentAddItem = () => {
  const handlePushComment = () =>
    notifySuccess('Bình luận thành công đang chờ phê duyệt', {duration: 3000})

  return {
    handlePushComment,
  }
}
