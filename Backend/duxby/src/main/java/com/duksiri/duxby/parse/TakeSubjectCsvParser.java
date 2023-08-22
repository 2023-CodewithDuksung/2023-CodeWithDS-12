package com.duksiri.duxby.parse;

import com.duksiri.duxby.dto.SubjectDTO;
import com.duksiri.duxby.dto.TakeSubjectDTO;
import com.duksiri.duxby.entity.SubjectEntity;
import com.duksiri.duxby.entity.UserEntity;
import com.duksiri.duxby.service.SubjectService;
import com.duksiri.duxby.service.TakeSubjectService;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import lombok.RequiredArgsConstructor;

import java.io.*;

@RequiredArgsConstructor
public class TakeSubjectCsvParser {

    // 서비스 선언
    private final TakeSubjectService takeSubjectService;
    String[] takeSubjectInfo;

    public void readTakeSubjectCSV() {
        try {
            CSVReader csvReader = new CSVReader(new InputStreamReader(new FileInputStream("C:\\Users\\ski03\\take_subject_data.csv"), "UTF-8"));
            csvReader.readNext();

            do {
                takeSubjectInfo = csvReader.readNext();
                if(takeSubjectInfo != null) {
                    TakeSubjectDTO takeSubjectDTO = new TakeSubjectDTO();

                    takeSubjectDTO.setTakeSubjectId(takeSubjectInfo[0]);
                    takeSubjectDTO.setCompletionGrade(Integer.parseInt(takeSubjectInfo[1]));
                    takeSubjectDTO.setCompletionSemester(Integer.parseInt(takeSubjectInfo[2]));
                    takeSubjectDTO.setSubjectCode(SubjectEntity.builder().subjectCode(takeSubjectInfo[3]).build());
                    takeSubjectDTO.setUserStudentNumber(UserEntity.builder().userStudentNumber(takeSubjectInfo[4]).build());

                    takeSubjectService.saveTakeSubject(takeSubjectDTO);
                }
            } while(takeSubjectInfo != null);


        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (CsvValidationException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
