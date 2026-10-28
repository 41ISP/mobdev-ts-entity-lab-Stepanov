export interface Root {
  data: Daum[]
  meta: Meta
}

export interface Daum {
  id: number
  documentId: string
  address: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  number: string
  letter: string
  yard: boolean
  balcony: boolean
  startDateOfOperation: string
  private: boolean
  photo: any
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
