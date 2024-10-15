export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};


export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
};

export namespace Patient {
  export type QueryParams = {
    id?: string;
    is_active?: boolean;
    name?: string;
    p_lastname?: string;
    email?: string; // TODO: Email validation here
  };

  export type Payload = {
    name: string;
    p_lastname: string;
    email: string; // TODO: Email validation here
    m_lastname?: string;
    birthdate?: Date;
  };

  export type Changeset = {
    name?: string;
    p_lastname?: string;
    email?: string; // TODO: Email validation here
    m_lastname?: string;
    birthdate?: Date;
  };

  export type Response = {
    _id: string;
    name: string;
    email: string;
    p_lastname: string;
    m_lastname?: string;
    birthdate?: Date;
    created_at: Date;
    updated_at: Date;
    is_active: boolean;
    is_new: boolean;
  };
}
