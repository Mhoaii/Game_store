import React, { useState, useRef, useCallback } from 'react';
import DevHeader from '../components/DevHeader';

interface FormData {
  authorName: string;
  contactEmail: string;
  gameName: string;
  description: string;
  downloadLink: string;
  videoLink: string;
}

interface ImageFile {
  id: number;
  file: File;
  preview: string;
}

const SubmitGamePage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        authorName: '',
        contactEmail: '',
        gameName: '',
        description: '',
        downloadLink: '',
        videoLink: '',
    });
    const [genres, setGenres] = useState<string[]>(['RPG', 'Strategy']);
    const [genreInput, setGenreInput] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState<ImageFile[]>([
        { id: 1, file: new File([], ""), preview: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY9UPyEM5X34--mA9EccIG0NleGoKhvGwwuo9y4tW0opDRUbRem0bfqOzjAzRFstKIr4UXgUbpiJS6sY-8ViCE8gMNtUuismvrPhVSA0hPxoXD5Y-GKOzkj9OzWQ_IWf7NRut4G_PJt0U0U_gtMsVS0WnXXh7oCGNEATkWeLABE0c73BnUF2n0GmyeGcz5rP7AqkIBVChhCFG5-40xz9jqMJfuVWF4NHfC5ERkfE-aOzgJVWnIPfIF6ruXNMjJCH0DP5rUQVu_oOo" },
        { id: 2, file: new File([], ""), preview: "https://lh3.googleusercontent.com/aida-public/AB6AXuB24Vz-m51Lr07j59KbqOCXR7_dOyiF6Oo2iRWII4TYLTIDcu4uSPc3tgBrBactSwx5dyHKhJQK3pp70vsTM6wfiPQsJ6R7WoUJWLuAIA-tF665djOkQOKDAAELimpl1maGNimTt3pHC5712nmIvWeuh1B9OANCzO4tzKLvKxtxXO0RAnuXJcSSxm0rkah6Q1ZYuj61y2KCJKS356oCnFTZSlbChiRK7GPHNkqLwBAm-5fpSMpsrsWUEDtKLbacJgcB6qISY88JD-s" },
    ]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGenreKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && genreInput.trim() !== '') {
            e.preventDefault();
            if (!genres.includes(genreInput.trim())) {
                setGenres([...genres, genreInput.trim()]);
            }
            setGenreInput('');
        }
    };

    const removeGenre = (genreToRemove: string) => {
        setGenres(genres.filter(genre => genre !== genreToRemove));
    };

    const handleFileDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        // FIX: Argument of type 'unknown[]' is not assignable to parameter of type 'File[]'.
        const files: File[] = Array.from(e.dataTransfer.files);
        handleFiles(files);
    }, []);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        // FIX: Argument of type 'unknown[]' is not assignable to parameter of type 'File[]'.
        const files: File[] = e.target.files ? Array.from(e.target.files) : [];
        handleFiles(files);
    };

    const handleFiles = (files: File[]) => {
        const newImageFiles: ImageFile[] = files
            .filter(file => file.type.startsWith('image/'))
            .map(file => ({
                id: Date.now() + Math.random(),
                file,
                preview: URL.createObjectURL(file)
            }));

        setUploadedFiles(prev => [...prev, ...newImageFiles]);
    };
    
    const removeFile = (id: number) => {
        setUploadedFiles(prev => prev.filter(file => file.id !== id));
    };

    const triggerFileSelect = () => fileInputRef.current?.click();

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col">
            <DevHeader active="Submissions" />
            <main className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-10">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-10">
                    <div className="flex min-w-72 flex-col gap-2">
                        <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Submit a New Game</p>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Fill in the details below to get your game ready for review.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Game Details</h2>
                            <div className="flex flex-col gap-6">
                                <label className="flex flex-col">
                                    <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Game Name</p>
                                    <input name="gameName" value={formData.gameName} onChange={handleInputChange} className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal" placeholder="Enter your game's title" />
                                </label>
                                <label className="flex flex-col">
                                    <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Detailed Description</p>
                                    <textarea name="description" value={formData.description} onChange={handleInputChange} className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary min-h-[150px] placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal" placeholder="Describe your game in detail..."></textarea>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col">
                                        <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Download/Play Link</p>
                                        <input name="downloadLink" value={formData.downloadLink} onChange={handleInputChange} className="form-input h-12" placeholder="https://example.com/play" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Video Demo Link</p>
                                        <input name="videoLink" value={formData.videoLink} onChange={handleInputChange} className="form-input h-12" placeholder="YouTube, Vimeo, etc." />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                             <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Categorization</h2>
                            <label className="flex flex-col">
                                <div className="flex items-center gap-2 pb-2">
                                    <p className="text-slate-800 dark:text-white text-base font-medium leading-normal">Game Type/Genre</p>
                                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-base cursor-help" title="Select multiple genres that best fit your game.">help</span>
                                </div>
                                <div className="flex flex-wrap gap-2 p-3 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-lg min-h-[48px] items-center">
                                    {genres.map(genre => (
                                        <span key={genre} className="flex items-center gap-1 bg-primary/20 text-primary text-sm font-medium px-2 py-1 rounded-full">
                                            {genre}
                                            <button onClick={() => removeGenre(genre)} className="material-symbols-outlined !text-sm">close</button>
                                        </span>
                                    ))}
                                    <input
                                        value={genreInput}
                                        onChange={(e) => setGenreInput(e.target.value)}
                                        onKeyDown={handleGenreKeyDown}
                                        className="form-input flex-1 bg-transparent border-none p-0 focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Add genre..."
                                    />
                                </div>
                            </label>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                             <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Visual Assets</h2>
                             <div 
                                onClick={triggerFileSelect}
                                onDrop={handleFileDrop}
                                onDragOver={(e) => e.preventDefault()}
                                className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-center cursor-pointer">
                                <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">upload_file</span>
                                <p className="mt-2 text-slate-800 dark:text-white font-semibold">Drag & drop files here</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">or click to browse</p>
                                <input ref={fileInputRef} onChange={handleFileSelect} className="hidden" multiple type="file" accept="image/png, image/jpeg, image/gif"/>
                                <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">Supports: PNG, JPG, GIF up to 10MB</p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                                {uploadedFiles.map((imageFile) => (
                                    <div key={imageFile.id} className="relative group aspect-video rounded-lg overflow-hidden">
                                        <img className="w-full h-full object-cover" src={imageFile.preview} alt="Game screenshot" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button onClick={() => removeFile(imageFile.id)} className="text-white">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 mt-4">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Save as Draft</span>
                            </button>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Submit for Review</span>
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-28">
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Live Preview</h3>
                            <div className="w-full aspect-[9/16] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col overflow-hidden">
                                <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                                    {uploadedFiles.length > 0 ? (
                                        <img src={uploadedFiles[0].preview} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">videocam</span>
                                    )}
                                </div>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="size-16 bg-slate-200 dark:bg-slate-800 rounded-lg flex-shrink-0"></div>
                                    <div className="flex-grow">
                                        <div className={`h-6 w-3/4 rounded mb-2 ${formData.gameName ? 'bg-primary/20' : 'bg-slate-200 dark:bg-slate-800'}`}>{formData.gameName && <p className="text-white p-1 text-sm truncate">{formData.gameName}</p>}</div>
                                        <div className={`h-4 w-1/2 rounded ${formData.authorName ? 'bg-primary/20' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {genres.map(g => <div key={g} className="h-6 px-3 bg-primary/20 text-primary text-sm rounded-full">{g}</div>)}
                                </div>
                                <div className="space-y-2 flex-grow">
                                    <div className={`h-4 w-full rounded ${formData.description ? 'bg-primary/10' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
                                    <div className={`h-4 w-full rounded ${formData.description ? 'bg-primary/10' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
                                    <div className={`h-4 w-3/4 rounded ${formData.description ? 'bg-primary/10' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
                                </div>
                                <div className="mt-auto pt-4">
                                    <div className="h-12 w-full bg-primary/30 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SubmitGamePage;
