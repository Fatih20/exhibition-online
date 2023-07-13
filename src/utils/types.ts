const fieldsForm = ["name", "gender", "origin", "knowFrom"] as const;
export type FieldForm = (typeof fieldsForm)[number];
