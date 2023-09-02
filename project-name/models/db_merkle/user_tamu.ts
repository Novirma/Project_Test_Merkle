import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface user_tamuAttributes {
  id?: number;
  username?: string;
  password?: string;
}

@Table({ tableName: 'user_tamu', schema: 'public', timestamps: false })
export class user_tamu
  extends Model<user_tamuAttributes, user_tamuAttributes>
  implements user_tamuAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('user_tamu_id_seq'::regclass)"),
  })
  @Index({ name: 'user_tamu_pkey', using: 'btree', unique: true })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  username?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  password?: string;
}
