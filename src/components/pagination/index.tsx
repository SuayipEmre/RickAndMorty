import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useThemeColors } from '../../store/features/appearance/hooks';
import styles from './styles';

type PaginationProps  = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}


const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

    const colors = useThemeColors()


    const handlePreviousPage = () => currentPage > 1 && onPageChange(currentPage - 1)
        

    const handleNextPage = () => currentPage < totalPages &&  onPageChange(currentPage + 1)
          

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePreviousPage} disabled={currentPage === 1}>
                <Text style={[{ color: colors.primary }, styles.button, currentPage === 1 && {color:colors.secondary}]}>Previous</Text>
            </TouchableOpacity>
            <Text style={[{color : colors.primary}, styles.pageInfo]}>
                Page {currentPage} of {totalPages}
            </Text>
            <TouchableOpacity onPress={handleNextPage} disabled={currentPage === totalPages}>
                <Text style={[{ color: colors.primary }, styles.button, currentPage === totalPages && {color:colors.secondary}]}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Pagination;
