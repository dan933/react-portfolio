export interface IProjectCard{
    title: string;
    subtitle: string;
    img: string;
    caption: string;
    gitHubLink?: string;
    youtubeLink?: string;
    sourceCode?: string;
    description?: string;
    demoURL?: string;
    IsGitHubButton: boolean;
    IsDemoButton?: boolean;
}