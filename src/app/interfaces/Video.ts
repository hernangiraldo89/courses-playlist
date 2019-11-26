interface Question {
  second: number;
  question: string;
}

export interface Video {
  id: number;
  title: string;
  url: any;
  description: string;
  watched: boolean;
  hasQuestion: boolean;
  question?: Question;
}
