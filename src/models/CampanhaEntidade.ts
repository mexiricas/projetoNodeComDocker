import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface CampanhaInstance extends Model {
    id: number,
    nome: string,
    dataCadastro: string,
    dataInicio: string,
    dataFim: string,
    status: boolean,
    categoria: string
}

export const Campanha = sequelize.define<CampanhaInstance>('Campanha', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: DataTypes.STRING,
    dataCadastro: DataTypes.DATE,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    categoria: DataTypes.STRING,
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    tableName: 'campanha',
    timestamps: false,
}
);