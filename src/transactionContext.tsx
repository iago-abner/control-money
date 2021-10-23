import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api';

interface Transaction{
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
}

/* interface TransactionInput{
    title: string;
    type: string;
    amount: number;
    category: string;
} */
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode; 
}

interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    )

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get<{transactions: Transaction[]}>('/transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transaction: TransactionInput) {
        const response = await api.post<TransactionInput,{ data: { transaction: Transaction } }>('/transactions', {
          ...transaction,
          createdAt: new Date(),
        });
        setTransactions([...transactions, response.data.transaction]);
      }

    return(
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
}