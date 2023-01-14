import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  Model,
  ForeignKey,
  Unique,
  Length,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsTo,
  AllowNull
} from 'sequelize-typescript';

@Table(
  {
    timestamps: false
  }
)
export class Excel extends Model {
  
  @Column({ type: DataType.STRING })
  link: string;
}