import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
} from 'sequelize-typescript';

export interface guest_formAttributes {
  id?: number;
  nama?: string;
  alamat?: string;
  nomor_telepon?: string;
  catatan?: string;
}

@Table({ tableName: 'guest_form', schema: 'public', timestamps: false })
export class guest_form
  extends Model<guest_formAttributes, guest_formAttributes>
  implements guest_formAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('guest_form_id_seq'::regclass)"),
  })
  @Index({ name: 'guest_form_pkey', using: 'btree', unique: true })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  nama?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  alamat?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  nomor_telepon?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  catatan?: string;
}
